class BookstockController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Bookstock.all
    end
    def show 
        v = Bookstock.find(params[:id])
        render json: v
    end 
    def create
        v = !params[:bookName].empty? and !params[:bookAuthor].empty? and !params[:bookQuantity].nil?

        if (v)
          p=Bookstock.create(
            'bookName': params[:bookName],
            'bookAuthor': params[:bookAuthor],
            'bookQuantity': params[:bookQuantity]
            )
          puts p
          render json: "Data Added"
        else
        render json: "Data not added"
        end
    end
    def update 
        p = Bookstock.find(params[:id].to_i)
        p.update('bookName': params[:bookName],
            'bookAuthor': params[:bookAuthor],
            'bookQuantity': params[:bookQuantity]
            )
        render json: "Data Updated"
    end
    def destroy 
        p = Bookstock.find(params[:id])
        p.destroy
        render json: "Data Deleted"
    end
end
