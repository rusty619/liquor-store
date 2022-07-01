class BrandsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_respons
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        brands = Brand.all 
        render json: brands
    end

    def show 
        brand = Brand.find(params[:id])
        render json: brand
    end

    def create 
        brand = brand.create!(brand_params)
        render json: home, status: :created
    end

    def destroy 
        brand = Brand.find(params[:id])
        brand.destroy 
        head :no_content
    end

    private 

    def brand_params 
        params.permit(:name, :country, :country_img, :img, :description, :website)
    end

    def render_unprocessable_entity_response(exception) 
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response 
        render json: {error: "Brand Not Found"}, status: :not_found
    end
end
