class LocationsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index 
        location = Location.all
        render json: location 
    end
end
