import React from 'react';

const Nocontent = () => {
    return (
        <div className=" h-screen     p-4">
<div>
<div>
<p className="text-lg md:text-xl font-medium text-gray-700 dark:text-white">
        <span className="font-bold">There is no content available at this time.</span>
      </p>
</div>
<div>
<p className="text-lg md:text-xl font-medium text-gray-700 mt-2 dark:text-white">
        <span className="font-bold">Please wait for some time or try again later.</span>
      </p>
</div>
</div>

    </div>
    );
};

export default Nocontent;