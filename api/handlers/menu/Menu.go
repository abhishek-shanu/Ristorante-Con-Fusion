package menu

import (
	"resturant/api/database"
	"resturant/api/library"

	"github.com/gin-gonic/gin"
	"github.com/go-pg/pg/v10"
)

//handler for request to get the list of all items available in menu
func Menu(c *gin.Context) {
	var (
		db  *pg.DB
		err error
	)

	// establish connection to database
	if db, err = library.GetDB(); err != nil {
		return
	}
	defer db.Close()

	menuItems := &[]database.MenuItem{}
	err = db.Model(menuItems).Select()
	library.BuildResponse(c, menuItems, "No Items Found.", err)
}
