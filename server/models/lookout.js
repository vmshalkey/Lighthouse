var mongoose = require('mongoose');

var LookoutSchema = new mongoose.Schema({
	lookout_id: { type: String, trim: true },
	traveler_id: { type: String, trim: true },
	journey_id: { type: String, default: "extinguished" },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Lookout', LookoutSchema);