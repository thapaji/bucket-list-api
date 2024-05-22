import BucListSchema from "./BucListSchema.js";

/*CREATE*/
export const insertBucList = (bucListObj) => {
    console.log(bucListObj)
    return BucListSchema(bucListObj).save();
}

/*READ*/
export const getBucList = (userId) => {
    console.log(userId)
    return !userId ? {} : BucListSchema.find({ owner: userId });
}

export const getBucItem = (_id) => {
    return BucListSchema.findOne({ _id });
}

/*UPDATE*/
export const updateBucList = (_id, listItem) => {
    console.log(listItem);
    return BucListSchema.findByIdAndUpdate({ _id }, { ...listItem }, { new: true });
}

/*DELETE ONE or  MANY*/
export const deleteBucList = (ids) => {
    return BucListSchema.deleteMany({ _id: { $in: ids } });
}