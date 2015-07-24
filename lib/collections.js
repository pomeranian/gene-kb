//-----------------------------------------------//
//
// Reusable Sub-Schema Elements / Structures (sch)
// .recordStatus
// .Disposition
// 		.Locations
// 		.States
// .SampleType
// .Analysis
// .Activity
//   
//-----------------------------------------------//

// Atomic
schRecordStatus = new SimpleSchema({
	rcdStatus: {
		type: String,
		label: "Record Status",
		max: 10,
		defaultValue: "active",
		allowedValues: 
			['active',
			 'inactive'],
		autoform: {
      type: "select",
      options: function () {
        return [
	        {label: "active", value: "active"},
          {label: "inactive", value: "inactive"},
        ];
      }
    }
	}
});

schDisposition = new SimpleSchema({
	state: {
		type: String,
		label: "Sample State",
		defaultValue: "Received",
		allowedValues: 
			['In transit',
			 'Delivered',
			 'Received',
			 'Extracted',
			 'Stored'],
		autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "Received"
      }
    }
	},
	location: {
		type: String,
		label: "Sample Location", 
		defaultValue: "Receiving Area",
		allowedValues: 
			['Receiving Area',
			 'Refrigirator +6',
			 'Refrigirator -4'],
		autoform: {
      type: "select",
      options: function () {
        return [
	        {label: "Receiving Area", value: "Receiving Area"},
          {label: "Refrigirator +6", value: "Refrigirator +6"},
          {label: "Refrigirator -4", value: "Refrigirator -4"}
        ];
      }
    }
	}
});

schSampleType = new SimpleSchema({
	smpType: {
		type: String,
		label: "Sample Type",
		defaultValue: "Extracted DNA",
		allowedValues: 
			['Buccal Swap',
			 'DNA Tape',
			 'Extracted DNA'],
		autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Buccal Swap", value: "Buccal Swap"},
          {label: "DNA Tape", value: "DNA Tape"},
          {label: "Extracted DNA", value: "Extracted DNA'"}
        ];
      }
    }
	}
});


schAnalysis = new SimpleSchema({
	plateID: {
		type: String,
		label: "Plate ID",
		max: 8
	},
	ncbiSNP: {
		type: String,
		label: 'ncbi SNP code',
		max: 16
	},
	geneSymbol: {
		type: String,
		label: 'Gene Symbol',
		max: 16
	},
	assayName: {
		type: String,
		label: 'Assay Name',
		max: 32
	},
	allele1: {
		type: String,
		label: 'A1',
		max: 1,
		allowedValues: 
			['G',
			 'C',
			 'T',
			 'A'],	
		autoform: {
      type: "select",
      options: function () {
        return [
          {label: "G", value: "G"},
          {label: "C", value: "C"},
          {label: "T", value: "T"},
          {label: "A", value: "A"}
        ];
      }
    }
	},
	allele2: {
		type: String,
		label: 'A2',
		max: 1,
		allowedValues: 
			['G',
			 'C',
			 'T',
			 'A'],	
		autoform: {
      type: "select",
      options: function () {
        return [
          {label: "G", value: "G"},
          {label: "C", value: "C"},
          {label: "T", value: "T"},
          {label: "A", value: "A"}
        ];
      }
    }
	}
});

schQAMeasurement = new SimpleSchema({
	qaConc: {
		type: Number,
		label: "QA Conc",
		max: 1
	},
	qaPurity: {
		type: Number,
		label: "QA Rurity",
		max: 1
	},
	qaFrag: {
		type: String,
		label: "QA Fragmentation",
		max: 16
	},
	qaInstrument: {
		type: String,
		label: "Instrument",
	},
});

// schActivity = new SimpleSchema({
Activity = new Mongo.Collection("activities");
Activity.attachSchema(new SimpleSchema({
	actType: {
		type: String,
		label: "Activity Type",
		allowedValues: 
			['Movement',
			 'Analysis',
			 'QA Measurement'
			 ],
		autoform: {
      type: "select",
      afFieldInput: {
        firstOption: '(Select One)'
      }
    }
	},
	disposition: {
		type: schDisposition,
		label: "Disposition",
		optional: true
	},
	result: {
		type: schAnalysis,
		label: "Analysis",
		optional: true
	},
	qaCheck: {
		type: schQAMeasurement,
		label: "Quality Measurement",
		optional: true
	},
	comment: {
		type: String,
		label: "Comments",
		min: 1,
		max: 512,
		optional: true
	},	
	createdAt: {
		type: Date,
		label: "When Created",
		optional: true
	}
}));

schActivity = new SimpleSchema({
	actType: {
		type: String,
		label: "Activity Type",
		allowedValues: 
			['Movement',
			 'Analysis',
			 'QA Measurement'
			 ],
		autoform: {
      type: "select",
      afFieldInput: {
        firstOption: '(Select One)'
      }
    }
	},
	disposition: {
		type: schDisposition,
		label: "Disposition",
		optional: true
	},
	result: {
		type: schAnalysis,
		label: "Analysis",
		optional: true
	},
	qaCheck: {
		type: schQAMeasurement,
		label: "Quality Measurement",
		optional: true
	},
	comment: {
		type: String,
		label: "Comments",
		min: 1,
		max: 512,
		optional: true
	},	
	createdAt: {
		type: Date,
		label: "When Created",
		optional: true
	}
});

//-----------------------------------------------//
//
// Core Collections
// .Clients
// .Jobs
// .Instruments
// .Samples
// 
//-----------------------------------------------//

Clients = new Mongo.Collection("clients");
Clients.attachSchema(new SimpleSchema({
	_id: {
		type: String,
		label: "Client ID",
		max: 10
	},
	name: {
		type: String,
		label: "Client Name",
		max: 128
	},
	status: {
		type: String,
		label: "Record Status",
		max: 10
	}
}));

Jobs = new Mongo.Collection("jobs");
Jobs.attachSchema(new SimpleSchema({
	_id: {
		type: String,
		label: "Job ID",
		max: 10
	},
	clientID: {
		type: String,
		label: "Client ID",
		max: 10
	},
	clientPO: {
		type: String,
		label: "Client PO",
		max: 50
	},
	conNote: {
		type: String,
		label: "Consignment Note",
		max: 50
	},
	analysesOrdered: {
		type: String,
		label: "Analyses Ordered",
		max: 50
	},
	receivedAt: {
		type: Date,
		label: "When Received",
	}
}));

Instruments = new Mongo.Collection("instrumentRegister");
Instruments.attachSchema(new SimpleSchema({
	_id: {
		type: String,
		label: "Serial ID",
		max: 128
	},
	name: {
		type: String,
		label: "Instrument Name",
		max: 128
	},
	manuf: {
		type: String,
		label: "Manufacturer",
		max: 128
	},
	conMeth: {
		type: String,
		label: "Conc. Method",
		max: 64
	},
		instrStatus: {
		type: String,
		label: "Instrument Status",
		max: 10
	},
	createdAt: {
		type: Date,
		label: "When Created",
	}
}));


Samples = new Mongo.Collection("samples");
Samples.attachSchema(new SimpleSchema({
	_id: {
		type: Object,
		label: "Sample ID"
	},
	clientID: {
		type: String,
		label: "Client ID",
		max: 10
	},
	jobID: {
		type: String,
		label: "Job ID",
		max: 10
	},
	sampleType: {
		type: String,
		label: "Sample Type",
		allowedValues: 
			['Buccal Swap',
			 'DNA Tape',
			 'Extracted DNA'],
		autoform: {
      type: "select",
      defaultValue: "Extracted DNA"
    }
	},
	currDisposition: {
		type: schDisposition,
		label: "Current Disposition",
		optional: true
	},
	activities: {
		type: [schActivity],
		label: "Activities"
	},
	lastActAt: {
		type: Date,
		label: "Recent Activity",
	},
	createdAt: {
		type: Date,
		label: "When Created",
	}
}));
