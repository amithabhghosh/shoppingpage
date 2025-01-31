const Cart=require("../models/cartSchema")
const express=require("express")
const router=express.Router()



router.get('/:userId', async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
    if (!cart) {
      return res.json({ items: [], totalPrice: 0 });
    }
  
    const totalPrice = cart.items.reduce((total, item) => {
      return total + item.productId.new_price * item.quantity;
    }, 0);
  

    res.json({ items: cart.items, totalPrice });
  });
  

  
  router.post('/:userId', async (req, res) => {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId: req.params.userId });
  
    if (!cart) {
      cart = new Cart({ userId: req.params.userId, items: [] });
    }
  
    const existingItem = cart.items.find((item) => item.productId.toString() === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
  
    await cart.save();
    res.json(cart);
  });





  router.delete('/:userId/:productId', async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    cart.items = cart.items.filter((item) => item.productId.toString() !== req.params.productId);
    await cart.save();
    res.json(cart);
  });

  module.exports=router