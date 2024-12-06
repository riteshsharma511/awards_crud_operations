import mongoose from 'mongoose';

// Define the schema for the Award model
const awardSchema = new mongoose.Schema({
    award_name: {
        type: String, // Name of the award (should be a string)
        required: true
    },
    category: {
        type: String, // Category of the award (should be a string)
        required: true
    },
    recipient: {
        type: String, // Recipient of the award (should be a string)
        required: true
    },
    year: {
        type: Number, // Year of the award (should be a number, e.g., 2024)
        required: true
    },
    description: {
        type: String, // Description of the award (should be a string)
        required: true
    }
});

// Create and export the Award model
const Award = mongoose.model("Award", awardSchema);
export default Award;