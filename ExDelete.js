
//Somaiyah
export function deleteBlogPost (id){
    return fetch ('http://api.symfony-3.dev/app_dev.php/posts/' + id , {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => res)
}