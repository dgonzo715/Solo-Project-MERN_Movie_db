const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title:{ 
        type: String, 
        require: [ true, "Title is required for Movies"],
        minlength: [2, "Title must be at least 3 characters long"],
    },

    genre: { 
        type: String,
        require: [ true, "Genre is required for Movies"],
        enum: [ 
            "Action",
            "Adventure",
            "Animation",
            "Cinema Verite",
            "Comedy",
            "Drama",
            "Experimental",
            "Family",
            "Fantasy",
            "Foreign",
            "Horror",
            "Kung Fu",
            "Musical",
            "Mystery",
            "Romance",
            "Sci-Fi"
        ],  
    },
    producer: { 
        type: String, 
        require: [ true, "Producer is required for Movies"],
        minlength: [2, "Producer must be at least 3 characters long"],
    },
    length: { 
        type: Number,
        require: [ true, "Movie length in minutes is required for Movies"],
        min: [30, "Movies must be at least 30 minutes in length"]     
    },
    dateProduction: { type: Date },
    rating: { 
        type: String,
        require: [ true, "Rating is required for Movies" ],
        enum: [ 
            "G",
            "PG",
            "PG-13",
            "R",
            "NR"
            ],
         
    },
    isOnNetflix: { 
        type: Boolean,
        default: false  
    },
    // coverArtUrl: { type: String }
}, { timestamps: true});

module.exports = mongoose.model('Movie', MovieSchema)
