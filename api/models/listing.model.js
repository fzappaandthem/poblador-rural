import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userRef: {
        type: String,
        required: true,
    },
    repeticiones: {
        type: Number,
        required: true,
    },
    lun7: {
        type: Boolean,
        required: true,
    },
    lun1130: {
        type: Boolean,
        required: true,
    },
    lun13: {
        type: Boolean,
        required: true,
    },
    lun1630: {
        type: Boolean,
        required: true,
    },
    lun19: {
        type: Boolean,
        required: true,
    },
    lun21: {
        type: Boolean,
        required: true,
    },
    lun7: {
        type: Boolean,
        required: true,
    },
    lun1130: {
        type: Boolean,
        required: true,
    },
    lun13: {
        type: Boolean,
        required: true,
    },
    lun1630: {
        type: Boolean,
        required: true,
    },
    lun19: {
        type: Boolean,
        required: true,
    },
    lun21: {
        type: Boolean,
        required: true,
    },
    mar7: {
        type: Boolean,
        required: true,
    },
    mar1130: {
        type: Boolean,
        required: true,
    },
    mar13: {
        type: Boolean,
        required: true,
    },
    mar1630: {
        type: Boolean,
        required: true,
    },
    mar19: {
        type: Boolean,
        required: true,
    },
    mar21: {
        type: Boolean,
        required: true,
    },
    mie7: {
        type: Boolean,
        required: true,
    },
    mie1130: {
        type: Boolean,
        required: true,
    },
    mie13: {
        type: Boolean,
        required: true,
    },
    mie1630: {
        type: Boolean,
        required: true,
    },
    mie19: {
        type: Boolean,
        required: true,
    },
    mie21: {
        type: Boolean,
        required: true,
    },
    jue7: {
        type: Boolean,
        required: true,
    },
    jue1130: {
        type: Boolean,
        required: true,
    },
    jue13: {
        type: Boolean,
        required: true,
    },
    jue1630: {
        type: Boolean,
        required: true,
    },
    jue19: {
        type: Boolean,
        required: true,
    },
    jue21: {
        type: Boolean,
        required: true,
    },
    vie7: {
        type: Boolean,
        required: true,
    },
    vie1130: {
        type: Boolean,
        required: true,
    },
    vie13: {
        type: Boolean,
        required: true,
    },
    vie1630: {
        type: Boolean,
        required: true,
    },
    vie19: {
        type: Boolean,
        required: true,
    },
    vie21: {
        type: Boolean,
        required: true,
    },
    sab7: {
        type: Boolean,
        required: true,
    },
    sab1130: {
        type: Boolean,
        required: true,
    },
    sab13: {
        type: Boolean,
        required: true,
    },
    sab1630: {
        type: Boolean,
        required: true,
    },
    sab19: {
        type: Boolean,
        required: true,
    },
    sab21: {
        type: Boolean,
        required: true,
    },
    dom7: {
        type: Boolean,
        required: true,
    },
    dom1130: {
        type: Boolean,
        required: true,
    },
    dom13: {
        type: Boolean,
        required: true,
    },
    dom19: {
        type: Boolean,
        required: true,
    },
    dom21: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;