const express = require('express');
const path = require('path');
const fs = require('fs');
// MongoDB and authentication related imports (commented out for GitHub)
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const Menu = require('./models/Menu');
// const Review = require('./models/Review');
// const Offer = require('./models/Offer');
// const Blog = require('./models/Blog');
// const Reservation = require('./models/Reservation');
// const User = require('./models/User');

const app = express();
const PORT = 3000;
// const JWT_SECRET = 'your-secret-key'; // Change this to a secure secret key

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Authentication middleware (commented out for GitHub)
/*
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.redirect('/admin/login');
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.redirect('/admin/login');
        }
        req.user = user;
        next();
    });
};

// Admin middleware
const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (user && user.isAdmin) {
            next();
        } else {
            res.status(403).send('Forbidden: Admin access required');
        }
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};
*/

// Auth routes (commented out for GitHub)
/*
app.get('/admin/login', (req, res) => {
    res.render('admin/login');
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !user.isAdmin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logout successful' });
});
*/

// Protected admin routes (commented out for GitHub)
/*
app.get('/admin/dashboard', authenticateToken, isAdmin, (req, res) => {
    res.render('admin/dashboard');
});

app.get('/admin/menu', authenticateToken, isAdmin, (req, res) => {
    res.render('admin/menu');
});

app.get('/admin/reviews', authenticateToken, isAdmin, (req, res) => {
    res.render('admin/reviews');
});

app.get('/admin/offers', authenticateToken, isAdmin, (req, res) => {
    res.render('admin/offers');
});

app.get('/admin/blog', authenticateToken, isAdmin, (req, res) => {
    res.render('admin/blog');
});

app.get('/admin/reservations', authenticateToken, isAdmin, (req, res) => {
    res.render('admin/reservations');
});

app.get('/admin/users', authenticateToken, isAdmin, (req, res) => {
    res.render('admin/users');
});
*/

// Route for homepage
app.get('/homepage', (req, res) => {
    res.render('homepage');
});

// Route for blog
app.get('/blog', (req, res) => {
    res.render('blog');
});

// Route for offer
app.get('/offer', (req, res) => {
    res.render('offer');
});

// Route for ourmenu
app.get('/ourmenu', (req, res) => {
    res.render('ourmenu');
});

// Route for review
app.get('/review', (req, res) => {
    res.render('review');
});

// Route for reservation
app.get('/reservation', (req, res) => {
    res.render('reservation');
});

// Route to serve homepage data
app.get('/homepagedata', (req, res) => {
    const homepageFilePath = path.join(__dirname, 'data', 'homepage.json');
    fs.readFile(homepageFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading homepage file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Route to serve menu data
app.get('/menudata', (req, res) => {
    const menuFilePath = path.join(__dirname, 'data', 'menudata.json');
    fs.readFile(menuFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading menu file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Route to serve blog data
app.get('/blogdata', (req, res) => {
    const blogFilePath = path.join(__dirname, 'data', 'blogdata.json');
    fs.readFile(blogFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading blog file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Route to serve offer data
app.get('/offerdata', (req, res) => {
    const offerFilePath = path.join(__dirname, 'data', 'offerdata.json');
    fs.readFile(offerFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading offer file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Route to serve review data
app.get('/reviewdata', (req, res) => {
    const reviewFilePath = path.join(__dirname, 'data', 'reviewdata.json');
    fs.readFile(reviewFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading review file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Route to serve reservation data
app.get('/reservationdata', (req, res) => {
    const reservationFilePath = path.join(__dirname, 'data', 'reservationdata.json');
    fs.readFile(reservationFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading reservation file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Route for homepage view
app.get('/', (req, res) => {
    res.render('homepage');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
