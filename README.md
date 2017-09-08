# Oh hai, Minnesota!

## About this site

This is a curated list of tech, creative and design communities and events. It is by no means exhaustive so please please let me know you'd like other communities added.

#### Listing Policies

I reserve the right to NOT add a community for pretty much any reason at all (though you may appeal in public via Gtihub issues).  That said, after over a year I've never had to do that. I'll keep a tally (0) here as a self recorded history of my person chilling effect.  

There are additionally communities who have asked me not to be added to this list despite them being basically public communities. Again a tally (1) is provided to document these decisions to not provide an open accounting of resources that are available to at least some of this community.

Please do not add communities without organizer consent or they may be removed without notice.  You do not need to have your own Slack or online presence but should provide adequate contact information and description to be useful the public.


#### Contacting me

I'm available [on twitter](https://twitter.com/jimthedev) or please open a Github issue with questions, new events or communities that you'd like added.

Thanks!

## Development

Note: You do not have to add your community on your own. I can do that for you if you open an issue. That said, if you want to take a stab at it, here's some info to help you on your way.

This site is a zeithq Next.js site and is hosted on zeithq's Now hosting. As such, you basically just need to edit pages/index.js to add your community, event, group. You'll see that it is one big react component for now. Add your stuff in there by coping and pasting an existing and put in a PR. Please make sure to use https:// for your image urls if possible since this site is served over https in production.

If you want to run the site locally you need node.js installed but then can do the following:

1. Clone the repo and `cd` to the directory.
2. Install the dependencies `npm install`
3. Run `npm run dev`
4. Navigate to http://localhost:3000
