function changerColor()

{
    div=document.getElementById('aya')

    form =document.getElementById('myform')

    div.style.backgroundColor = form.Couleur.value
}

function ChangerTaille()
{
    div=document.getElementById('aya')

    form =document.getElementById('myform')

    div.style.width = form.a1.value + "px"

    div.style.height = form.a2.value + "px"


}
function Cacher ()
{
    div=document.getElementById('aya')

    if (div.style.display == 'none')
    {
        div.style.display = 'block'

        div = document.getElementById ('button1')

        div.innerHTML = "Cacher"

    }
    else
    {
        div.style.display = 'none'
        
        div = document.getElementById ('button1')

        div.innerHTML = "Afficher"
    }
    
    
}