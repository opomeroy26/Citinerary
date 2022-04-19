class ActivitiesController < ApplicationController

    before_action :find_activity, only: [:show]
    skip_before_action :authorize, only: [:index, :show]

    # GET /activities
    def index
        # if (params[:name])
        #     @activities =  Activity.where({name: params[:name]})
        # else
        #     @activities = Activity.all
        # end
        
        render json: Activity.all
    end

    def search 
        # activities = @Activity.where("name LIKE ?", "%" + params[:q] + "%")
        activities =  Activity.where({name: params[:name]})
        render json: activities
    end
    
    # GET /activites/:id
    def show 
        render json: @activity
    end


    private 

    def find_activity
        @activity = Activity.find(params[:id])
    end

    def activity_params
        params.permit(:name, :duration, :description, :user_id, :location_id)
        # maybe include :search??
    end

end
