import type { CandidatesType } from "@/types/candidates";
import { cn } from "@/utils/styles";

type CandidateProps = CandidatesType & {

    className?: string
}

export default function Candidates(data: CandidateProps) {
    const { name, age, experience, status, skills, working } = data;
    navigator.clipboard.writeText('')
    return (
        <>
            <div className={cn(data.className,
                'border border-gray-300 rounded-lg p-4 shadow-2xl, flex-col min-w-[300px]'
            )}>
                <div className='flex items-center justify-between mb-2 gap-2'>
                    <h2 className=" font-bold text-xl">{name.toUpperCase()}</h2>
                    <span className={cn('text-sm font-medium', 'px-4 py-1 rounded-full text-white', getStatusColor(status))}>{status.toUpperCase()}</span>

                </div>

                <p className="text-gray-300">Age: {age}</p>
                <p className="text-gray-300">Experience: {experience} years</p>

                <p className={cn(working ? 'text-green-600' : 'text-red-600')}>
                    {working ? 'Currently working' : 'Not currently working'}
                </p>
                <h3 className="text-lg font-semibold mt-2">Skills:</h3>
                <ol>
                    {
                        skills.map((skill, index) => (
                            <span key={index} className="block ml-1">{skill}</span>
                        ))
                    }
                </ol>
                <button className=" m-auto w-full bg-amber-800 text-white hover:bg-amber-700 rounded-2xl py-1 hover:cursor-pointer hover:scale-105" onClick={() => { copyClipBoard(data) }}>Copy candidate data</button>
            </div>
        </>
    )
}

function copyClipBoard(data: CandidateProps) {
    let candidateData = 'Nombre : ' + data.name
        + '\n Edad: ' + data.age
        + '\n Experiencia: ' + data.experience + ' años'
        + '\n Estado: ' + data.status
        + '\n Habilidades: ' + data.skills.join(', ')
        + '\n Estado laboral: ';
    data.working ? candidateData + 'Trabaja' : candidateData + 'No trabaja';
    navigator.clipboard.writeText(candidateData);
    alert('Copy on ClipBoard')
}

function getStatusColor(status: CandidatesType['status']) {
    if (status === 'Hired') { return 'bg-green-600'; }
    if (status === 'Refused') { return 'bg-red-600'; }
    if (status === 'Pending') { return 'bg-blue-600'; }
    if (status === 'Reviewing') { return 'bg-blue-600'; }
    if (status === 'Interviewing') { return 'bg-yellow-600'; }


}