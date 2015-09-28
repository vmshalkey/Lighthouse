var mongoose = require('mongoose');

var BeaconSchema = new mongoose.Schema({
	beacon_name: { type: String, trim: true },
	description: { type: String, trim: true },
	status: { type: String, default: "extinguished" },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Beacon', BeaconSchema);
BeaconSchema.path('beacon_name').required(true, "Beacon Name is required");
BeaconSchema.path('description').required(true, "Description is required");