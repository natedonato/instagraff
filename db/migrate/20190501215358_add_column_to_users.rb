class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string
    add_column :users, :full_name, :string
  end
end
