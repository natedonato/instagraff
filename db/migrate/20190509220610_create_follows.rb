class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :leader_id, null: false
      t.integer :follower_id, null: false
      t.timestamps
    end
    add_index :follows, :leader_id
    add_index :follows, :follower_id
  end
end
