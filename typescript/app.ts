const enum Status {
    published,
    draft,
    deleted
}

type ReqType = {
    topicId: number
    status: Status.published
}
type ResponseMyType = {
    question: string
    answer: string
    tags: string[]
    likes: number
    status: Status.published
}

async function getFaqs(req: ReqType): Promise<ResponseMyType[]> {
    const res = await fetch("/faqs", {
        method: "POST",
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}


function generateError(message: string): never {
    throw new Error();
}