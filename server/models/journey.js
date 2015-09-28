var mongoose = require('mongoose');

var JourneySchema = new mongoose.Schema({
	traveler_id: { type: String, trim: true },
	beacon_id: { type: String, trim: true },
	status: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Journey', JourneySchema);
JourneySchema.path('status').required(true, "Status is required");