package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "This is a website server by a Go HTTP server.")
	})

	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello World! I'm a HTTP server!")
	})

	fs := http.FileServer(http.Dir("static/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.ListenAndServe(":3001", nil)

	// ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	// client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb+srv://devconnector-yhovu.mongodb.net/test"))
	// // if err != nil {
	// // 	panic(err)
	// // }
	// // err = client.Ping(ctx, readpref.Primary())

	// ctx, _ = context.WithTimeout(context.Background(), 2*time.Second)
	// err = client.Ping(ctx, readpref.Primary())
	// if err != nil {
	// 	fmt.Println(err)
	// }
	// collection := client.Database("testing").Collection("data")
	// ctx, _ = context.WithTimeout(context.Background(), 5*time.Second)
	// res, err := collection.InsertOne(ctx, bson.M{"name": "pi", "value": 3001})
	// // if err != nil {
	// // 	fmt.Println(err)
	// // }
	// id := res.InsertedID
	// fmt.Println(id)
}
