
const express = require("express");
const router = express.Router();
const products = require("../models/productSchema");
const multer = require('multer');
// router.get('/', (req, res) => {
//     console.log('api is running')
// })
// const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./shop/public/uploads/");
    },
    filename: (req, file, cb) => {
        // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        // cb(null, file.fieldname + "-" + uniqueSuffix);
        cb(
            null,
            // toString("hex") + path.extname(file.originalname)
            file.originalname
        );
    }
});
const filefilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

router.post('/', upload.single("image"), async (req, res) => {
    console.log('req', req.file)
    const { name, category, price, brand, rating, numReviews, countInStock, description, slug } = req.body;

    let image = req.file.originalname;

    // console.log("picture", req.file.originalname)


    if (!name || !category || !price || !brand || !countInStock || !description || !slug) {
        res.status(422).json('Please Fill the data');
    }

    try {
        const preproducts = await products.findOne({ name: name });
        // console.log(preuser);

        if (preproducts) {
            res.status(422).json('same product is there')
        } else {
            const addproducts = new products({
                name, category, price, image, brand, rating, numReviews, countInStock, description, slug
            });

            await addproducts.save();
            res.status(201).json(addproducts);
            // console.log('addUser', addUser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})

router.get('/getdata', async (req, res) => {
    try {
        const productData = await products.find();
        res.status(201).json(productData);
        // console.log(userData)
    } catch (error) {
        res.status(422).json(error);

    }
})

router.get('/getproduct/:id', async (req, res) => {
    try {

        // console.log(req.params.id)
        const { id } = req.params;

        const product = await products.findById({ _id: id });

        console.log(product);

        res.status(201).json(product);

    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports = router;
