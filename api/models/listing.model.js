import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
{
    recipient: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    userRef: {
        type: String,
        required: true,
    },
    repetitions: {
        type: Number,
        required: true,
    },
    isEnabled: {
        type: Boolean,
        required: true,
    },
    Mon0700: {
        type: Boolean,
        required: true,
    },
    Mon1130: {
        type: Boolean,
        required: true,
    },
    Mon1300: {
        type: Boolean,
        required: true,
    },
    Mon1630: {
        type: Boolean,
        required: true,
    },
    Mon1900: {
        type: Boolean,
        required: true,
    },
    Mon2100: {
        type: Boolean,
        required: true,
    },
    Mon0700: {
        type: Boolean,
        required: true,
    },
    Mon1130: {
        type: Boolean,
        required: true,
    },
    Mon1300: {
        type: Boolean,
        required: true,
    },
    Mon1630: {
        type: Boolean,
        required: true,
    },
    Mon1900: {
        type: Boolean,
        required: true,
    },
    Mon2100: {
        type: Boolean,
        required: true,
    },
    Tue0700: {
        type: Boolean,
        required: true,
    },
    Tue1130: {
        type: Boolean,
        required: true,
    },
    Tue1300: {
        type: Boolean,
        required: true,
    },
    Tue1630: {
        type: Boolean,
        required: true,
    },
    Tue1900: {
        type: Boolean,
        required: true,
    },
    Tue2100: {
        type: Boolean,
        required: true,
    },
    Wed0700: {
        type: Boolean,
        required: true,
    },
    Wed1130: {
        type: Boolean,
        required: true,
    },
    Wed1300: {
        type: Boolean,
        required: true,
    },
    Wed1630: {
        type: Boolean,
        required: true,
    },
    Wed1900: {
        type: Boolean,
        required: true,
    },
    Wed2100: {
        type: Boolean,
        required: true,
    },
    Thu0700: {
        type: Boolean,
        required: true,
    },
    Thu1130: {
        type: Boolean,
        required: true,
    },
    Thu1300: {
        type: Boolean,
        required: true,
    },
    Thu1630: {
        type: Boolean,
        required: true,
    },
    Thu1900: {
        type: Boolean,
        required: true,
    },
    Thu2100: {
        type: Boolean,
        required: true,
    },
    Fri0700: {
        type: Boolean,
        required: true,
    },
    Fri1130: {
        type: Boolean,
        required: true,
    },
    Fri1300: {
        type: Boolean,
        required: true,
    },
    Fri1630: {
        type: Boolean,
        required: true,
    },
    Fri1900: {
        type: Boolean,
        required: true,
    },
    Fri2100: {
        type: Boolean,
        required: true,
    },
    Sat0700: {
        type: Boolean,
        required: true,
    },
    Sat1130: {
        type: Boolean,
        required: true,
    },
    Sat1300: {
        type: Boolean,
        required: true,
    },
    Sat1630: {
        type: Boolean,
        required: true,
    },
    Sat1900: {
        type: Boolean,
        required: true,
    },
    Sat2100: {
        type: Boolean,
        required: true,
    },
    Sun0700: {
        type: Boolean,
        required: true,
    },
    Sun1130: {
        type: Boolean,
        required: true,
    },
    Sun1300: {
        type: Boolean,
        required: true,
    },
    Sun1900: {
        type: Boolean,
        required: true,
    },
    Sun2100: {
        type: Boolean,
        required: true,
    },
    fechaUltimaEmision: {
        type: Date,
        required: true,
    },
    cantEmisionesSemanales: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;