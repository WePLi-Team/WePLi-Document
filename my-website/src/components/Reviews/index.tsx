const posts = [
    {
        id: 1,
        title: '친구들이랑 음악 같이 찾아요!',
        href: '#',
        description:
            '위플리 덕분에 요즘 새로운 음악 찾는 게 너무 재밌어요! 친구들이랑 같이 플레이리스트 만들고 서로 곡 추천하면서 취향도 알아가고 있어요. 심심할 때 딱이에요!',
        date: '2024-10-10',
        datetime: '2024-10-10',
        category: { title: '음악 발견', href: '#' },
        author: {
            name: '제인 도',
            role: '디자이너',
            href: '#',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7z5273iRgrTefT_4s-WQCtfNiQ9tmDwTDSERYMB72rviyPdWGl3SDAxhi-6OXVBsnPfI&usqp=CAU',
        },
    },
    {
        id: 2,
        title: '취향 공유하며 더 친해졌어요!',
        href: '#',
        description:
            '위플리로 친구들이랑 노래 공유하면서 서로 더 친해진 느낌이에요. 평소에 몰랐던 친구들 취향도 알게 되고, 나만의 플레이리스트도 더 풍성해져서 진짜 좋아요!',
        date: '2024-10-15',
        datetime: '2024-10-15',
        category: { title: '소통과 취향 공유', href: '#' },
        author: {
            name: '박보영',
            role: '배우',
            href: '#',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqcveC-mD_rmmn81JOa2kxLeW0ieNruL5CnhRTaY3MqquVJ9-gINKVTGVlTE4t7WdgcU&usqp=CAU',
        },
    },
    {
        id: 3,
        title: '진짜 편해요!',
        href: '#',
        description:
            '음악 앱 여러 개 쓰기 귀찮았는데, 위플리 하나로 친구들이랑 같이 들을 곡도 찾고 플레이리스트도 공유할 수 있어서 너무 편해요. 이제 다른 앱 필요 없을 듯!',
        date: '2024-10-20',
        datetime: '2024-10-20',
        category: { title: '소통과 취향 공유', href: '#' },
        author: {
            name: '박소영',
            role: '음악 큐레이터',
            href: '#',
            imageUrl:
                'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-young-smiling-korean-woman-with-black-color-and-black-hair-and-image_2947345.jpg',
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
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between p-4">
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