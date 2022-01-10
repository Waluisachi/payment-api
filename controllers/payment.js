const Account = require("../models/account");

exports.pay = async (req, res, next) => {
  const { userId, amount, recipient } = req.body;

  if (amount < 1) {
    console.log(`amount ${amount} is less than one bob`);
  }

  try {
    // Deduct amount
    let sender = await Account.findOne({ userId });

    sender = await Account.findOneAndUpdate(
      { userId },
      { balance: sender.balance - amount },
      { new: true }
    );
    // Debit recipient acccount
    let receiver = await Account.findOne({ userId: recipient });
    recipient = await Account.findOneAndUpdate(
      { userId: recipient },
      { balance: receiver.balance + amount },
      { new: true }
    );
    // Response
    res.status(201).json({
      success: true,
      receiver,
      sender,
    });
  } catch (e) {
    next(e);
  }
};
