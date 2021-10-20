import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAZMUHVHSYJLJFOH4P",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};