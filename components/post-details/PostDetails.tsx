import { PostWithUser } from '@/types/types';
import { PostHeader } from './PostHeader';
import { PostContent } from './PostContent';
import { PostFooter } from './PostFooter';
import CommentSection from './CommentSection';
interface PostDetailsProps {
	post: PostWithUser;
	currentUserId?: string;
}

export function PostDetails({ post, currentUserId }: PostDetailsProps) {
	return (
		<div className="w-full bg-transparent">
			<PostHeader post={post} currentUserId={currentUserId} />
			<PostContent post={post} />
			<PostFooter post={post} currentUserId={currentUserId} />
			<CommentSection />
		</div>
	);
}