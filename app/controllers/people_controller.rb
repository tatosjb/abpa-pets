class PeopleController < ApplicationController
  before_action :set_person, only: [:show, :edit, :update, :destroy]

  # GET /people
  # GET /people.json
  def index
    @people = Person
        .order(name: :asc)
        .paginate(:page => params[:page])
  end

  # GET /people/find
  def find_person
    people = Person.select(:id, :name)
        .order(name: :asc)
        .paginate(page: 1, per_page: 20)

    people = people
        .order(name: :asc)
        .where('upper(name) like ?', "%#{params["query"].upcase}%") if !params["query"].nil?

    render json: people
  end

  def find_volunteer
    people = Person.select(:id, :name)
        .where(volunteer: :true)
        .order(name: :asc)
        .paginate(page: 1, per_page: 20)

    people = people
        .where('upper(name) like ?', "%#{params["query"].upcase}%") if !params["query"].nil?

    render json: people
  end

  # GET /people/1
  # GET /people/1.json
  def show
  end

  # GET /people/new
  def new
    @person = Person.new
  end

  # GET /people/1/edit
  def edit
  end

  # POST /people
  # POST /people.json
  def create
    @person = Person.new(person_params)

    respond_to do |format|
      if @person.save
        format.html {redirect_to @person, notice: 'Person was successfully created.'}
        format.json {render :show, status: :created, location: @person}
      else
        format.html {render :new}
        format.json {render json: @person.errors, status: :unprocessable_entity}
      end
    end
  end

  # PATCH/PUT /people/1
  # PATCH/PUT /people/1.json
  def update
    respond_to do |format|
      if @person.update(person_params)
        format.html {redirect_to @person, notice: 'Person was successfully updated.'}
        format.json {render :show, status: :ok, location: @person}
      else
        format.html {render :edit}
        format.json {render json: @person.errors, status: :unprocessable_entity}
      end
    end
  end

  # DELETE /people/1
  # DELETE /people/1.json
  def destroy
    @person.destroy
    respond_to do |format|
      format.html {redirect_to people_url, notice: 'Person was successfully destroyed.'}
      format.json {head :no_content}
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_person
    @person = Person
        .order(name: :asc)
        .find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def person_params
    params.require(:person).permit(:name, :rg, :cpf, :occupation, :company, :address, :neighborhood, :referece_point,
                                   :ibge_code, :volunteer, :email, :phone)
  end
end
