class Likes < ActiveRecord::Migration[5.0]
  def change
    drop_table :likes
  end
end
