var StaticServer=require('static-server');


var server=new StaticServer({
	rootPath:'./',
	port:2000
});

server.start(()=>{
	console.log("Server started at port"+server.port);	
}); 

