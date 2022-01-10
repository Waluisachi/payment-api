const Account = require('../models/account');

exports.deposit =  async(req, res, next) => {
  const { amount, userId } = req.body;

  if (amount > 1) {
    console.log("amount should be above one bob.");
  }

  try {
    let account = await Account.findOne({_id: userId});
    if (account) {
      let balance  = account.balance + amount;
      account = await Account.findOneAndUpdate({_id: userId}, {balance}, {new: true})

      res.status(201).json({
        success: true
        account
      })

    }
  } catch (e) {
    next(e);
  }
};
