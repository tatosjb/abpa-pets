class AdoptionController < ApplicationController

# POST /donate
  def donate
    @adoption = Adoption.new(animal_params)
    @adoption.save

    redirect_to animals_url @adoption.animal
  end

# GET /donate/1
  def show
  end

  def animal_params
    params.require(:adoption).permit(:animal_id, :person_id)
  end
end
