import Board from './components/Board';

export default function Game() {
    return (
        <div className="mt-72">
            <div className="flex justify-center content-center">
                <Board />
            </div>
            <div className="text-center">
                <div>status</div>
                <ol>moves</ol>
            </div>
        </div>
    );
}