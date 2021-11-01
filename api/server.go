package main

import (
	"resturant/api/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	//database.Creat_db()
	//gin.SetMode(gin.ReleaseMode)
	router := gin.Default()
	menu := router.Group("/menu")
	{
		menu.GET("", handlers.Menu)
		menu.GET("/img", handlers.MenuImage)
		menu.GET("/:itemID", handlers.Item)
		menu.GET("/:itemID/img", handlers.ItemImage)
	}

	comment := router.Group("/comment")
	{
		comment.GET("/:itemID", nil)
		comment.POST("/create", nil)
	}

	feedback := router.Group("/feedback")
	{
		feedback.POST("/", nil)
	}
	router.Run("localhost:8080")

}
