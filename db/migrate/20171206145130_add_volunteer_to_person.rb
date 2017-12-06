class AddVolunteerToPerson < ActiveRecord::Migration[5.1]
  def change
    add_column :people, :volunteer, :boolean
  end
end
