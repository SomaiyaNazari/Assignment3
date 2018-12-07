
//Somiyah
import Swipeout from 'react-native-swipeout';
import fetchBlogPosts, deleteBlogPost} from '../../actions/blogPostActions';
import Table from '../../components/Table';

export default class Delete extends Component
{
    onDelete(id){
        deleteBlogPost(id).then((data) => {
            let blogPosts = this.state.blogPosts.filter ((post) =>
            {
                return id !== post.id;
            });

            this. setState(state => {
                state.blogPosts = blogPosts;
            });
        }
        render(){
           return (
               <div>
               <Table blogPosts={this.state.blogPosts}
                   onDelete={this.onDelete.bind(this)}
                   />
                   </div>
           );
}}