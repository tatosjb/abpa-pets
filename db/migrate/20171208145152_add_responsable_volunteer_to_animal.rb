class AddResponsableVolunteerToAnimal < ActiveRecord::Migration[5.1]
  def change
    add_reference :animals, :person, foreign_key: true
  end
end
