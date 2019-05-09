# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :user_id, :photo_id, presence: true
    validates :user_id, :uniqueness => { :scope => :photo_id }

    belongs_to :user
    
    belongs_to :photo

    def find_by_user_photo(user_id, photo_id)
        
    end

end
