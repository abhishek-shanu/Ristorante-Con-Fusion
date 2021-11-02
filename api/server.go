package main

import (
	"log"
	"resturant/api/library"
	"resturant/api/routes"

	"github.com/gin-gonic/gin"
)

/*
Starting point of the server
All the routes are created here
and there end points are mentioned in respective
route file inside routes package
*/
func main() {
	//gin.SetMode(gin.ReleaseMode)

	//initialize the router
	router := gin.Default()
	//endpoints for all menu related request
	routes.Menu(router)
	//endpoints for all comment related request
	routes.Comment(router)
	//endpoints for all feedback related request
	routes.Feedback(router)

	// Start the server with the listening port in config file
	if listeningPort, err := library.GetListeningPort(); err == nil {
		router.Run(listeningPort)
	} else {
		log.Println("Server could not be started")
		log.Println(err)
	}
}
