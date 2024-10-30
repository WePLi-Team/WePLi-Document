const posts = [
    {
        id: 1,
        title: '친구들이랑 음악 같이 찾아요!',
        href: '#',
        description:
            '위플리 덕분에 새로운 음악을 찾는 재미가 생겼어요! 친구들이 어떤 음악을 듣는지 볼 수 있고, 같이 플레이리스트도 만들 수 있어서 요즘 너무 즐거워요!',
        date: '2024-10-10',
        datetime: '2024-10-10',
        category: { title: '음악 발견', href: '#' },
        author: {
            name: '제인 도',
            role: '음악 애호가',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: '취향 공유하며 더 친해졌어요!',
        href: '#',
        description:
            '위플리 덕분에 친구들과 플레이리스트를 같이 만들면서 서로의 음악 취향을 더 잘 알게 되었어요. 친구들이 좋아하는 곡들에 내 취향도 추가할 수 있어서 너무 재미있어요!',
        date: '2024-10-15',
        datetime: '2024-10-15',
        category: { title: '소통과 취향 공유', href: '#' },
        author: {
            name: '김지훈',
            role: '음악 팬',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function ReviewSection() {
    return (
        <div className="bg-white pt-0 pb-24 sm:pt-0 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Reviews</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div> */}

                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-none space-y-2">
                                    <p className="font-semibold text-gray-900 m-0">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600 m-0">{post.author.role}</p>
                                </div>
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
