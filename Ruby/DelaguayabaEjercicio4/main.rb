#Anthony Rodriguez Ledezma 207720941
def histogram()
  myArray=[1,2,1,3,3,1,2,1,5,1]
  asteriscs=""
  j=1
  while j <=5
    
    for i in 0..10 do

     if j==myArray[i]
      asteriscs+='*'
     end
    end  
    
    puts j.to_s+': '+asteriscs
    asteriscs=""
    j+=1
  end 
end 

histogram