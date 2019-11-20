const app = require('express')();
const express = require('express');
const path = require( 'path' );
const config = require('./config');

app.use(express.static(path.resolve(__dirname, '/data')));
app.use(express.static(path.join( __dirname, '../', 'client', 'build')));

app.get('/', ( req, res ) => {
    console.log('Get');
    res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'))
});

app.get('/data', ( req,res ) => {
    console.log('Data request')
    res.sendFile( path.join(__dirname+'/data/data.json') );
});

const listen = ( log ) => {
    return app.listen( config.PORT, () => {
        console.log( log );
    });
}

module.exports.init = () => {
    return listen( `Server listening on port ${ config.PORT }.` );
};