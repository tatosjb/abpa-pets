class AnimalsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_animal, only: [:show, :edit, :update, :destroy]

  # GET /animals
  # GET /animals.json
  def index
    @animals = if params[:q]
      if params[:q].to_i > 0
        Animal.where(id: params[:q])
            .order(created_at: :asc)
            .paginate(:page => params[:page], :per_page => 10)
      else
        Animal.where("upper(name) like ?", "%#{params[:q].upcase}%")
            .order(created_at: :asc)
            .paginate(:page => params[:page], :per_page => 10)
      end
    else
      Animal.order(created_at: :asc).paginate(:page => params[:page])
    end
  end

  # GET /animals/1
  # GET /animals/1.json
  def show
  end

  # GET /animals/new
  def new
    @animal = Animal.new
  end

  # GET /animals/1/edit
  def edit
  end

  # POST /animals
  # POST /animals.json
  def create
    @animal = Animal.new(animal_params)

    respond_to do |format|
      if @animal.save
        format.html {redirect_to @animal, notice: 'Animal was successfully created.'}
        format.json {render :show, status: :created, location: @animal}
      else
        format.html {render :new}
        format.json {render json: @animal.errors, status: :unprocessable_entity}
      end
    end
  end

  # PATCH/PUT /animals/1
  # PATCH/PUT /animals/1.json
  def update
    respond_to do |format|
      if @animal.update(animal_params)
        format.html {redirect_to @animal, notice: 'Animal was successfully updated.'}
        format.json {render :show, status: :ok, location: @animal}
      else
        format.html {render :edit}
        format.json {render json: @animal.errors, status: :unprocessable_entity}
      end
    end
  end

  # DELETE /animals/1
  # DELETE /animals/1.json
  def destroy
    @animal.destroy
    respond_to do |format|
      format.html {redirect_to animals_url, notice: 'Animal was successfully destroyed.'}
      format.json {head :no_content}
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_animal
    @animal = Animal
        .order(created_at: :asc)
        .find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def animal_params
    params.require(:animal).permit(:pet_type, :name, :code, :size, :fur, :color, :gender, :birthdate, :description,
                                   :castred, :placement, :person_id, :approximated_born)
  end
end
