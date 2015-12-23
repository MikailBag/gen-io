'use strict';
const redis=require('redis');
const genio=require('../lib');
const client=redis.createClient();
genio(function*(){
    let val;
    let redis=new genio.Context(client);
    val='works with Redis';
    yield redis.set('gen-io',val);
    val=yield redis.get('gen-io');
    console.log(`gen-io ${val}`);
});