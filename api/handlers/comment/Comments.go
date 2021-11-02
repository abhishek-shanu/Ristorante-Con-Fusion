package handlers

import (
	"resturant/api/database"
	"resturant/api/library"

	"github.com/gin-gonic/gin"
	"github.com/go-pg/pg/v10"
)

//handler for request to get all comments of any item
func Comment(c *gin.Context) {

	var (
		db  *pg.DB
		err error
	)
	if db, err = library.GetDB(); err != nil {
		return
	}
	defer db.Close()

	comments := &[]database.Comments{}
	err = db.Model(comments).Select()
	library.BuildResponse(c, comments, "No comments found", err)
}

//handler for request to create new comment
func CreateComment(c *gin.Context) {
}
