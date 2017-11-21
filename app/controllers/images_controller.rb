class ImagesController < ApplicationController
  def save_image
    image_id = params[:image_id]
    animal_id = params[:animal_id]

    puts "############Image: #{image_id}################"
    puts "############Animal: #{animal_id}################"


    @image = Image.new(image_params)

    if @image.save
      redirect_to animals_url(@image.animal)
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def image_params
    params.require(:image).permit(:image_id, :animal_id)
  end
end
