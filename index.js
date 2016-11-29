require('dotenv').config({silent: true});
const AWS = require('aws-sdk');

const AWSConfig = new AWS.Config({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});


// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});
                    
// Call S3 to list current buckets
s3.headBucket({Bucket: 'wowo-dev-test-template'}, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});