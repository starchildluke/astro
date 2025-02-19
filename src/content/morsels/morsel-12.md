---
title: 'Morsel #12: styling a WordPress post to look like a Bluesky post'
published: true
pubDate: '23 May 2024'
---

Even though I've deleted Twitter, I miss just throwing a thought out into the ether. WordPress has [post formats](https://developer.wordpress.org/advanced-administration/wordpress/post-formats/) that can facilitate that. They are:

* aside: like a note
* gallery: a gallery of images
* link: a link to another site (great for [linkblogs](/linkblog/))
* image: a single image
* quote: a quote
* status: a status update, similar to a tweet
* video: a video or video playlist
* audio: an audio file or playlist
* chat: a chat transcript

Most of these I probably wouldn't much if at all but status intrigued me. I already use asides on all of my blogs front page but I wanted something different for those quick quips or musings. Because a lot of modern WordPress themes don't come with post formats out of the box, you have to enable them so I added this to my theme's functions.php file:

```php
add_theme_support( 'post-formats', array( 'POST_FORMAT_NAME' ) );
```

Then you have to create a template for your format(s) (unless your theme has them already) and that's where I had to get really creative. Here's what a Bluesky post looks like:

<img src="/images/bluesky-post.jpg" alt="a bluesky post by me that says bleh" loading="lazy" />

To get that working, I wrote a function in the template-tags.php file in my inc folder that retrieved my author name, my website (since it was also my Bluesky handle), and my avatar. All this info was accessible via the `get_the_author_meta()` function:

```php
function status_author() {
    $author_avatar = get_avatar( get_the_author_meta( 'ID' ), 64 );
    $author_name = get_the_author_meta('user_firstname') . ' ' . get_the_author_meta('user_lastname');
    $url_cleanup = array("https://" => "", "/" => "");
    $author_url = strtr(get_the_author_meta('url'), $url_cleanup);
    echo '<div class="status-author-meta">' . '<div class="status-author-meta-avatar">' . $author_avatar . '</div>' . '<div class="status-author-meta-text">' . '<span>' . $author_name. '</span>' . '<span>' . '@' . $author_url . '</span>' . '</div>' . '</div>';
}
```

I also added a bit to get rid of the URL scheme and all the slashes. Nice and neat! Then, I added the status_author() function to my template file (content-status.php):

```php   
<?php if ( is_single() ) : ?>
        <h1 class="entry-title">
            <?php print_post_title(); ?>
        </h1>
<?php else : ?>
    <?php status_author(); ?>
    <div class="byline-text" style="margin-bottom:1rem;">
        <?php the_content(); ?>                 
    </div>
    <?php status_posted_on(); ?>
<?php endif; ?>

<?php if ( is_single() ) : ?>
    <br>
<?php endif; ?>

<?php 

if ( 'post' === get_post_type() ) : ?>

<?php
endif; ?>
</section><!-- .entry-header -->
```

What this says is to check if the page is a "single"—like a blog post—and if it is, add the title, otherwise add the status author info, the status text, and the date it was posted. I added some CSS to make mimic the Bluesky post design:

```css
/* please don't roast my CSS, I'm not a web dev!!! */

.status-author-meta, .status-author-meta-text, .status-author-meta-avatar {
    display: flex;
}

.status-author-meta {
    margin-bottom: 1rem;
}

.status-author-meta-text {
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    letter-spacing: 0.25px;
}

.status-author-meta-text span:first-child {
    font-size: 1.25rem;
    font-weight: 700;
}

.status-author-meta-text span:nth-child(2) {
    font-size: 1rem;
}

.status-author-meta-avatar img {
    border-radius: 50%;
}

.status-author-meta + .byline-text a {
    font-weight: 700;
    text-decoration: underline;
}

.status-author-meta + .byline-text a:hover {
    text-decoration: none;
}
```

And <span lang="fr">voilà</span>!

<img src="/images/status-post.jpg" alt="a wordpress status post that says 'imagining a world where SEGA still made hardware and they battled with Nintendo in the 2000s and 2010s for handheld dominance'" loading="lazy" />

Of course, how I put this together was specific to my setup and theme but the fundamental techniques are universal:

* add theme support for formats
* write the functions to get the author data
* output it in a template
* style it with CSS

Reclaim your status updates!