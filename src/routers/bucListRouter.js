import express from "express";
import { insertBucList, getBucList, updateBucList, deleteBucList, getBucItem } from "../models/buc-list/bucListModel.js";

const router = express.Router();

/* GET*/
router.get("/", async (req, res) => {
    const result = await getBucList();
    console.log(result);
    res.json({
        message: "Bucket List read",
        data: result,
    });
});

/* GET Single*/
router.get("/list", async (req, res) => {
    console.log('dasdasdasdasdasdasdsdadsadsadadasdsfasdgdfsg')
    console.log(req.headers)
    const { authorization, _id } = req.headers;
    const result = await getBucItem(_id);
    console.log(result);
    res.json({
        message: "Bucket List item read",
        data: result,
    });
});

/* POST*/
router.post("/", async (req, res) => {
    // console.log(req.body)
    try {
        const result = await insertBucList(req.body);
        // console.log(result);
        result?._id
            ? res.json({
                status: "success",
                message: "Added in your bucket list",
            })
            : res.json({
                status: "error",
                message: "Failed to add in your bucket list",
            });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: "error",
            message: "Something went wrong in server. Please contact the provider.",
        });
    }
});

/*update bucket-list*/
router.patch("/", async (req, res) => {
    try {
        // console.log(req.body)
        const result = await updateBucList(req.body.id, req.body);
        result?._id
            ? res.json({
                status: "success",
                message: "Your bucket list has been updated",
            })
            : res.json({
                status: "error",
                message: "Your bucket list could not be updated",
            });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: "error",
            message: "Something went wrong in server. Please contact the provider.",
        });
    }
});

/*delete bucket-list*/
router.delete("/", async (req, res) => {
    try {
        const result = await deleteBucList(req.body);
        result?.acknowledged
            ? res.json({
                status: "success",
                message: "Your bucket list has been deleted",
            })
            : res.json({
                status: "error",
                message: "Your bucket list could not be deleted",
            });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Something went wrong in server. Please contact the provider.",
        });
    }
});

export default router;