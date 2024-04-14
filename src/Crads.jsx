import React from 'react'

function Crads() {
  return (
    <div>
        <div className="cards w-full flex gap-16 pb-40 flex-wrap m-auto justify-center">
            {[{iimage:"https://images.pexels.com/photos/17070821/pexels-photo-17070821/free-photo-of-pair-of-puffins-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            text: "loremmmjdddddddddddddihsdghhh bae fh ugi vghsaoi oathgh gifghkgdsoi hoh g",
            name:"joydev",
            headline:"Rampur"
            },
            {iimage:"https://images.pexels.com/photos/20586326/pexels-photo-20586326/free-photo-of-a-woman-with-short-hair-and-a-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            text: "loremmmjdddddddddddddihsdghhh bae fh ugi vghsaoi oathgh gifghkgdsoi hoh g",
            name:"Halder",
            headline:"bhatpara"
            },
            
            {iimage:"https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            text: "loremmmjdddddddddddddihsdghhh bae fh ugi vghsaoi oathgh gifghkgdsoi hoh g",
            name:"suvo",
            headline:"gaighata"
            },
            {iimage:"https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            text: "loremmmjdddddddddddddihsdghhh bae fh ugi vghsaoi oathgh gifghkgdsoi hoh g",
            name:"suvo",
            headline:"gaighata"
            }
        ].map ((items,index)=>{
            return (
                <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img class="w-1/2 h-48 object-contain  mx-auto" src = {items.iimage} alt="" width="384" height="512"/>
                <div class="pt-6 space-y-4">
                  <blockquote>
                    <p class="text-lg ">
                      {items.text}
                    </p>
                  </blockquote>
                  <figcaption>
                  <div className='font-semibold'>
                 {items.name}
                </div>
                <div className='font-bold'>
                 {items.headline}
                </div>
                  </figcaption>
                </div>
              </figure>
            )
        })}

        </div>
    </div>
  )
}

export default Crads