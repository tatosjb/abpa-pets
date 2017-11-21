class ImagesController < ApplicationController
  before_action :set_image, only: [:destroy]

  def save_image
    @image = Image.new(image_params)

    if @image.save
      redirect_to animals_url(@image.animal)
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Cloudinary::Uploader.destroy(@image.image_id, options = {})
    @image.destroy

    redirect_to request.referrer
  end

  private
  def set_image
    @image = Image.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:image_id, :animal_id)
  end
end
